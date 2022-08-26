import { usePaintings } from "@/services/hooks/paintings";
import { Painting } from "@/services/models/paintings";
import { useState, useEffect, useRef, useCallback } from "react";
import produce from "immer";
import { GalleryCard } from "../../cards/gallery-card";

interface ColumnProps {
  paintings: Painting[];
  setHeight: (height: number) => void;
}

const COLUMN_DEFAULT = {
  paintings: [] as Painting[],
  height: 0 as number,
};

type ColumnData = typeof COLUMN_DEFAULT;

interface GalleryState {
  columns: ColumnData[];
  cardsRendered: number;
}

const Column: React.FC<ColumnProps> = (props) => {
  const root = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="h-max flex flex-col gap-6 md:gap-10" ref={root}>
        {props.paintings.map((painting) => (
          <GalleryCard
            painting={painting}
            key={painting.name}
            onLoad={() => {
              if (root.current) {
                props.setHeight(root.current.clientHeight);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

const calcColumns = (): number => {
  if (document.body.clientWidth >= 1400) {
    return 4;
  }
  if (document.body.clientWidth >= 1184) {
    return 3;
  }
  if (document.body.clientWidth >= 720) {
    return 2;
  }
  return 1;
};

const initializeGalleryState = (): GalleryState => {
  const columns: ColumnData[] = Array(calcColumns()).fill({
    ...COLUMN_DEFAULT,
  });
  return { columns: columns, cardsRendered: 0 };
};

export const GallerySection: React.FC = () => {
  const paintings = usePaintings();

  const [state, setState] = useState<GalleryState>(initializeGalleryState);

  const setColumnHeight = (index: number, height: number) => {
    const next = produce(state, (draft) => {
      draft.columns[index].height = height;
      if (draft.cardsRendered < paintings.length) {
        let smallerColumn = 0;
        draft.columns.forEach((col, idx) => {
          if (col.height < draft.columns[smallerColumn].height) {
            smallerColumn = idx;
          }
        });
        draft.columns[smallerColumn].paintings.push({
          ...paintings[draft.cardsRendered],
        });
        draft.cardsRendered += 1;
      }
    });
    setState(next);
  };

  useEffect(() => {
    if (state.cardsRendered === 0) {
      const next = produce(state, (draft) => {
        draft.columns[0].paintings.push({ ...paintings[0] });
        draft.cardsRendered = 1;
      });
      setState(next);
    }
  }, [state, paintings]);

  useEffect(() => {
    const listener = () => {
      const columns = calcColumns();
      console.log(columns);
      console.log(state.columns.length);

      if (columns !== state.columns.length) {
        setState(initializeGalleryState());
      }
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [state]);

  return (
    <section className="mt-10">
      <h2 className="sr-only">Paintings Gallery</h2>
      <div
        className="grid grid-cols-[min(100%,20.4375rem)] md:grid-cols-[20.25rem,20.25rem] 
        xl:grid-cols-[repeat(3,19.375rem)] xxl:grid-cols-[repeat(4,19.375rem)] gap-6 md:gap-10"
      >
        {state.columns.map((column, i) => (
          <Column
            key={i}
            paintings={column.paintings}
            setHeight={(height: number) => setColumnHeight(i, height)}
          ></Column>
        ))}
      </div>
    </section>
  );
};

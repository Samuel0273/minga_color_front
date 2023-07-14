import { createAction } from "@reduxjs/toolkit";

export const setDataChapter = createAction(
  "set_data_chapter",
  (number, title) => {
    return {
      payload: { number, title },
    };
  }
);

export const setPageCounter = createAction(
  "set_page_counter",
  (pageCounter) => {
    return {
      payload: pageCounter,
    };
  }
);

export const setNextChapterId = createAction(
  "set_next_chapter_id",
  (nextChapterId) => {
    return {
      payload: nextChapterId,
    };
  }
);

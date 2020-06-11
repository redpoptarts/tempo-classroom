import * as React from "react";
// import { useEffect, useState } from "react";
import "./Classroom.css";
import { Lesson, Video } from "../types";
import { useFetch, ResponseFn } from "../hooks/useFetch";

import notesApiMock from "../mocks/notesApiMock.json";

interface Props {
  lesson: Lesson;
}

interface AsyncLessonData {
  response: Video | undefined;
  error: string | undefined;
}

export const Classroom = function App(props: Props) {
  // const videoData = notesApiMock;

  const fetchVideoData: ResponseFn<Video> = useFetch;
  let { response: videoData, error } = fetchVideoData(
    props.lesson.metadataUrl,
    {}
  );

  if (error) {
    // return (
    //   <section className="classroom">
    //     <div>There was an error loading your lesson's video.</div>
    //     <div>{JSON.stringify(error)}</div>
    //   </section>
    // );
    videoData = notesApiMock;
  }
  if (!videoData) {
    return (
      <section className="Classroom">
        <div>Loading...</div>
      </section>
    );
  }

  return (
    <section className="Classroom">
      <video controls width="250">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </section>
  );
};

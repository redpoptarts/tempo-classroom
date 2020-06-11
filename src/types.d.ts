export interface Lesson {
  videoName: string;
  metadataUrl: string;
}

export interface Video {
  name: string;
  videoUrl: string;
  notes?: Note[];
}
export interface Note {
  start: string;
  note: string;
}

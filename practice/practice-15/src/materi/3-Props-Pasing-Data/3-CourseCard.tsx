import type { CourseCardProps } from './types/course-card.type';

function CourseCard(props: CourseCardProps) {
  return (
    <article>
      <h1>Materi 3 - Props (Passing Data) </h1>
      <h2>Judul : {props.title}</h2>
      <p>Mentor : {props.mentor}</p>
      <p>Meeting : {props.totalMeetings}</p>
    </article>
  );
}

export default CourseCard;

import { JSXRules } from './materi/1-JSX-Rules/';
import FunctionalComponent, {
  CourseCardComponent,
} from './materi/2-Functional-Component/';
import { CourseCard, Biodata } from './materi/3-Props-Pasing-Data/';
import { Card } from './materi/4-Props-Children/';
import { Button } from './materi/5-Styling-ClassName/';
import Dashboard from './materi/6-Prop-Drilling/';

<div style={{ height: '200dvh' }}>
  <h1>Materi React Class 15</h1>

  {/* Materi 1 - React Rules */}
  <JSXRules />

  {/* Materi 2 - Functional Component */}
  <h1>Materi 2 - Functional Component</h1>
  <FunctionalComponent />

  {/* Materi 3 - Props (Passing Data) */}
  <CourseCard title="React Class" mentor="Dicky F.S" totalMeetings={15} />
  <CourseCard title="Javascript Class" mentor="Ucup P.S" totalMeetings={20} />
  <Biodata name="Ucup" kelas="Batch Netherland" />

  {/* Materi 4 - Props (Children) */}
  <Card title="Javascript">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, natus!</p>
  </Card>
  <Card title="React">
    <h2>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, natus!
    </h2>
  </Card>

  {/* Materi 5 - Styling dengan className */}
  <h1>Materi 5 - Styling dengan className</h1>
  <Button text="Submit" isSubmit={true} />
  <br />
  <br />
  <Button text="Post" style={{ backgroundColor: 'red' }} isSubmit={false} />

  {/* Materi 6 - Prop Drilling */}
  <h1>Materi 6 - Prop Drilling</h1>
  <Dashboard name="Ucup" />
</div>;

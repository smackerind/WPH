import { useEffect, useState } from 'react';

type LightStatus = 'red' | 'green' | 'yellow';

function TrafficLight() {
  const [light, setLigth] = useState<LightStatus>('green');
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown <= 0) {
      return;
    }

    const timerId = setTimeout(() => {
      setCountdown((currentCount) => currentCount - 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0 && light === 'red') {
      setLigth('green');
    }
    // if (countdown === 3 && light === 'red') {
    //   setLigth('yellow');
    // }
  }, [countdown, light]);

  return (
    <section>
      <h1>Traffic Light</h1>

      <div>
        <div>
          Lampu :{' '}
          {light === 'red' ? (
            <span
              style={{
                background: 'red',
                width: '100px',
                height: '100px',
                borderRadius: '360px',
                display: 'block',
                textAlign: 'center',
                lineHeight: '100px',
              }}
            >
              MERAH
            </span>
          ) : (
            <span
              style={{
                background: 'green',
                width: '100px',
                height: '100px',
                borderRadius: '360px',
                display: 'block',
                textAlign: 'center',
                lineHeight: '100px',
              }}
            >
              HIJAU
            </span>
          )}
        </div>
        {light === 'red' && <h2>Countdown : {countdown}</h2>}
      </div>

      <button
        onClick={() => {
          setLigth('red');
          setCountdown(5);
        }}
      >
        Tombol Nyebrang
      </button>
    </section>
  );
}

export default TrafficLight;

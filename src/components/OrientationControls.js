import { useEffect } from 'react';

const OrientationControls = ({ setTargetPosition }) => {
  useEffect(() => {
    const handleOrientation = (event) => {
      // Use event.alpha, event.beta, event.gamma to get rotation data
      // Adjust these values based on your requirements
      const alpha = event.alpha * 3 || 0;
      const beta = event.beta || 0;
      const gamma = event.gamma || 0;

      // Calculate target position based on rotation
      const targetX = Math.sin(beta * (Math.PI / 180));
      const targetY = Math.sin(gamma * (Math.PI / 180));
      const targetZ = -Math.cos(beta * (Math.PI / 180));

      setTargetPosition(new Vector3(targetX, targetY, targetZ));
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [setTargetPosition]);

  return null;
};

export default OrientationControls;

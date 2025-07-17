import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <RotatingLines
        strokeColor="blue"
        width="60"
        visible={true}
      />
    </div>
  );
}
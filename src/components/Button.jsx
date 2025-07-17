export default function Button({ onClick }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <button className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
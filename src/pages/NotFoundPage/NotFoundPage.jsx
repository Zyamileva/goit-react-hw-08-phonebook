import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      {' '}
      <h1 style={{ marginTop: '100px', textAlign: 'center' }}>
        Cannot found this page
      </h1>
      <Link
        to="/"
        style={{
          marginTop: '100px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        To home page
      </Link>
    </>
  );
};

export default NotFoundPage;

function Loader() {
  return (
    <div className="inline-flex text-center m-5">
      <div
        className="spinner-grow spinner-grow-sm mx-3 text-primary"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow spinner-grow-sm mx-3 text-secondary"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow spinner-grow-sm mx-3 text-success"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow spinner-grow-sm mx-3 text-danger"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow spinner-grow-sm mx-3 text-warning"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow spinner-grow-sm mx-3 text-info"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow spinner-grow-sm mx-3 text-success"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow spinner-grow-sm mx-3 text-dark"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="text-center m-3 ">
      <h3 className="p-3 fs-1 ">Some Error Occured!</h3>
      <a href="/" className="fs-5">
        Try again.
      </a>
      <div className="alert alert-light mt-4" role="alert">
        <strong>Warning: </strong>
        <p className="fs-6 text-center">
          Access to 'NEWSVERSE' is temporarily limited.
          <br /> Please try again after a while. We apologize for any
          inconvenience.
        </p>
      </div>
    </div>
  );
}

export { Loader, ErrorMessage };

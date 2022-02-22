
function DisplayName({ initialname }) {
  return (
    <>
      <div style={{ fontSize:initialname.length > 11  ? '21px':'10px'}}>{initialname}</div>
    </>
  );
}
export default DisplayName;

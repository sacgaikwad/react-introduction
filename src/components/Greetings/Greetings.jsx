export function Greeting(props) {
  console.log(props);
  return (
    <div>
      Hi {props.firstName} {props.lastName} !
    </div>
  );
}

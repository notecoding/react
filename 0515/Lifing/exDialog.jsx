function Dialog(props){
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog(props){
  return(
    <Dialog
      title="어서 오세요"
      message="우리 사이트에 방문하신 것을 환영합니다!"
      />
  );
}

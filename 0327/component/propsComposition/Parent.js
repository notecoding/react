import React from "react";
import Child from "./Child";
function Parent() {
return (
<div>
<h1>부모컴포넌트</h1>
<Child name="홍길동" /> {/* props를통해데이터전달*/}
</div>
);
}
export default Parent;
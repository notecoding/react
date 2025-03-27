import React from "react";
import Child from "./Child";

function Parent() {
return (
<div>
<h1>부모 컴포넌트</h1>
<Child /> {/* 포함 관계로 합성 */}
</div>
);
}
export default Parent;
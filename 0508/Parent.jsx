function Parent() {
    function handleParentClick() {
    alert("부모요소클릭!");
    }
    function handleChildClick(event) {
    event.stopPropagation();
    alert("자식요소클릭!");
    }
    return (
    <div onClick={handleParentClick} style={{ padding: "20px", background: "#ddd" }}>
    <button onClick={handleChildClick}>클릭</button>
    </div>
    );
    }
export default Parent;   
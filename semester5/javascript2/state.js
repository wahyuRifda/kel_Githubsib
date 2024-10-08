let state = {
    count: 0 
};

function setState(newState){
    state = {...state, ...newState};
    render();
}

function render(){
    document.getElementById("count").innerHTML = `Hitung nilai ${state.count}`;
}

document.getElementById(`tambah`).addEventListener('click', () =>{
    setState({count: state.count + 1});
})
render();
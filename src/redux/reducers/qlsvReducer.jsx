
const stateDefault = {
    arrSinhVien: [{id:1,name:'Nguyễn Văn A'}, {id:2,name:'Nguyễn Văn C'}],
    sinhVien: {
        id:'',
        name:''
    }
}


export const qlsvReducer = (state = stateDefault,action) => {

    switch(action.type){
        default : return state;
    }
}
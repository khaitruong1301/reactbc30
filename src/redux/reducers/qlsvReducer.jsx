
const stateDefault = {
    arrSinhVien: [{id:1,name:'Nguyễn Văn A'}, {id:2,name:'Nguyễn Văn C'}],
    sinhVien: {
        id:'',
        name:''
    }
}


export const qlsvReducer = (state = stateDefault,action) => {

    switch(action.type){
        case 'HANDLE_CHANGE_INPUT': {
            let {id,value} = action;
            state.sinhVien[id] = value;
            state.sinhVien = {...state.sinhVien};
            return {...state}; //immutable
        }
        case 'HANDLE_SUBMIT': {
            //Bước 1 : lấy dữ liệu từ action ra
            let {sinhVien} = action;
            //Bước 2: clone state (object, array)
            let arrSinhVienUpdate = [...state.arrSinhVien];
            arrSinhVienUpdate.push(sinhVien);
            //Bước 3: cập nhật lại state
            state.arrSinhVien = arrSinhVienUpdate;
            return {...state};
        }

        default : return state;
    }
}


// lib, angular framework
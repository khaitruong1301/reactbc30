


const stateDefault = {
    burger: [{name:'salad',quantity:2}, {name:'cheese',quantity:2}, {name:'beef',quantity:2}],

    menu: {
        salad:10,
        cheese:20,
        beef:30
    }
}

export const demoBurgerReducer = (state = stateDefault,action) => {

    switch(action.type){
        case 'CHANGE_QUANTITY': {
            //B1: Lấy dữ liệu từ action gửi lên
            const {name,quantity} = action.payload;
            //B2: Clone state
            let burgerUpdate = [...state.burger];
            let item = burgerUpdate.find(p => p.name === name);
            if(item){
                item.quantity += quantity;
                if(item.quantity < 1) {
                    alert('Tối thiểu là 1');
                    item.quantity = 1;
                }
            }
            //B3: Cập nhật lại state
            state.burger = burgerUpdate;
            return {...state};
        }
        default : return state;
    }
}
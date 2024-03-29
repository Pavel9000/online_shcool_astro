

const initialState = {
    all: {
        "video": ``,
        "descr": ``}

    // all: {
    //     "video": ``,
    //     "descr": `[
    //     {"textContent":"Первоначально необходимо определиться с видом консультации. Для этого вы может связаться со мной по указанным контактам, описав причину, по которой вы обращаетесь или задав вопрос любым удобным для вас образом","textAlign":""},
    //     {"textContent":"После определения вида консультации необходимо произвести оплату услуги в размере 100 % от суммы","textAlign":""},
    //     {"textContent":"Оплата принимается на Яндекс кошелёк, карту Сбербанка, WebMoney и PayPal","textAlign":""},
    //     {"textContent":"Консультации могут быть срочными и не срочными. Время, которое мне потребуется на изучение вопроса может быть от нескольких часов до нескольких дней. Дополнительная плата за срочность не требуется","textAlign":""},
    //     {"textContent":"Консультация проводится online или в письменном формате в согласованное время","textAlign":""},
    //     {"textContent":"В течении двух недель предоставляется возможность задать вопросы, если это потребуется по теме заказанной ранее консультации. Я всегда готова ответить на вопросы и пояснить все неясности","textAlign":""}
    // ]`}

}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_HOW':
            return {
                ...state, 
                all: {...action.allNew}
            }
        case 'ADD_All_HOW':
            return {
                ...state,
                all: {...action.all}
            }
        default:
            return state
    }
}
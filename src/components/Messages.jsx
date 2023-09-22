import { useState } from "react"



function Messages() {

    const [message, setMessage] = useState([

        {
            id: 1,
            name: 'Costumer',
            text: 'Hello',
            side: 'left'
        },

        {
            id: 2,
            name: 'Admin',
            text: 'Hi',
            side: 'right'
        },

        {
            id :3,
            name : 'Costumer',
            text : 'How are you?',
            side : 'left'
        },

        {
            id: 4,
            name : 'Admin',
            text : 'Fine, thanks for question',
            side : 'right'
        },
        
    
    ])

    function deleteMessage(id) {
        
        setMessage(message.filter(item => {
            if(item.id === id ) {return false}
            return true
        }))
    }



    return (

        message.map((item, index) => {

            return(
        

                <div key={index} className={`row ${item.side === 'right' ? 'justify-content-end' : '' }`}>
                    <div className="col-3">
                        <div className="left">
                            <p>{item.text}</p>
                            <span>{item.name}</span>
                            <button className="btn btn-dark" onClick={() => deleteMessage(item.id)}>
                                X
                            </button>
                        </div>
                    </div>
                </div>


            )

        })










    )
}

        // <div className="container">




        //     <div className=" d-flex flex-column ">

        //         <div className="col-3">
        //             <div className="left">
        //                 <p>Hello</p>
        //                 <span>Costumer</span>
        //             </div>
        //         </div>

        //         <div className=" d-flex justify-content-end">
        //         <div className="col-3">
        //             <div className="right">
        //                 <p>Hi</p>
        //                 <span>Admin</span>
        //             </div>
        //         </div>
        //     </div>

        //         <div className="col-3">
        //             <div className="left">
        //                 <p>How are you?</p>
        //                 <span>Costumer</span>
        //             </div>
        //         </div>

        //     <div className=" d-flex justify-content-end">
        //         <div className="col-3">
        //             <div className="right">
        //                 <p>Fine, thanks for question</p>
        //                 <span>Admin</span>
        //             </div>
        //         </div>
        //     </div>


        //     </div>
        // </div>

export default Messages;
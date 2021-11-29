import React, {useCallback, useState} from 'react';

export default function useMail () {

    const enviaMail = useCallback((item) => {
        const body = JSON.stringify(item);
        alert(body);
        fetch("https://localhost/SentMail.php",{
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: body
        }).then(res => {

            return res.json();
        }).then((res) => {
            if(res){
               alert("hola")
            }else
                alert(res);
        });
    })


    return {
        enviaMail
    }
}

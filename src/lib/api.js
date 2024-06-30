export const sendContactForm = async (data) =>
    fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "applicatio/json",
            Accept: "applicatio/json",
        },
    }).then((res) => {
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
    })


export const sendApplyForm = async (data) =>
    fetch("/api/apply", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "applicatio/json",
            Accept: "applicatio/json",
        },
    }).then((res) => {
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
    })


export const requestCallBack = async (data) =>
    fetch("/api/enquiry", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "applicatio/json",
            Accept: "applicatio/json",
        },
    }).then((res) => {
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
    })


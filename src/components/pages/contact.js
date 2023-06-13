export function ContactParagraph({contact}){
    return (
        <p>
            {contact.titles.map(title => <div>{title}</div>)}
            {contact.texts.map(title => <div>{title}</div>)}
        </p>
    )
}
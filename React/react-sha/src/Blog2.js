const Blog1 = () => {
    function handleClick(){
        console.log("Button was clicked")
    }

    function greeting(){
        console.log("Good morning")
    }

    // function nama(intro){
    //     return intro;
    // }

    function greetingWithName(name){
        console.log(`Good morning, ${name}`);
    }

    function handleClickWithEvent(event){
        console.log(event);
        console.log("We are inside the function")
    }

    function eventDefiner(intro, event){
        console.log(`${intro} can be seen due to event ${event} is triggered`);
    }

    return ( 
        <section className="cen">
            This is a section <br />
            <button className="btn" onClick={handleClick}>Click this button</button><br />
            <button className="btn" onClick={greeting}>Get your greeting</button><br />
            <button className="btn" onClick={greetingWithName}>Get your greeting with name</button><br />
            <button className="btn" onClick={()=>greetingWithName('Shashwat')}>With Anonymous Function</button>
            <button className="btn" onClick={handleClickWithEvent}>Handle Click With Event</button>

            {/* Create btn 6 and pass wrapper function and an event object */}

            <button className="btn" onClick={()=> eventDefiner('Shashwat')}> Button-6</button>
        </section>
    );
}
export default Blog1;
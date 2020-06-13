import React, { Component } from 'react';

class Highlight extends Component {
    constructor(props) {
        super(props);
        this.getSelectionHtml = this.getSelectionHtml.bind(this);
        this.makeBold = this.makeBold.bind(this);
    }

    document.onselectionchange = function() {
        let selection = document.getSelection();
    
        cloned.innerHTML = astext.innerHTML = "";
        
        // Clone DOM nodes from ranges (we support multiselect here)
        for (let i = 0; i < selection.rangeCount; i++) {
          cloned.innerHTML= '<mark>'+selection.getRangeAt(i).toString()+'</mark>';
        }
    
        // console.log(p.text.indexOf("cloned"))
        // Get as text
        astext.innerHTML += selection;
      };

    getSelectionHtml() {
        let html = "";
        if (typeof window.getSelection != "undefined") {
            let sel = window.getSelection();
            if (sel.rangeCount) {
                let container = document.createElement("div");
                for (let i = 0, len = sel.rangeCount; i < len; ++i) {
                    container.appendChild(sel.getRangeAt(i).cloneContents());
                }


                html = container.innerHTML
            }
        } else if (typeof document.selection != "undefined") {
            if (document.selection.type === "Text") {
                console.log(2);
                html = document.selection.createRange().htmlText;
            }
        }


        console.log('bo', html);
        html.replace(/<\/?mark[^>]*>/g, "")
        console.log('ao', html.replace(/<\/?mark[^>]*>/g, ""));
        return {
            toRelpace: html.replace(/<\/?mark[^>]*>/g, ""),
            location: html
        }
    }


    makeBold() {
        let highlight = this.getSelectionHtml();
        let span = '<mark>' + highlight.toRelpace + '</mark>';
        let myarea = document.getElementById('myarea');
        console.log('highlight', highlight.toRelpace);
        console.log(new RegExp(highlight.location, 'g'));
        // console.log(highlight.selectAllChildren());

        myarea.innerHTML = myarea.innerHTML.replace(new RegExp(highlight.location, 'g'), span);
        console.log('myarea.innerHTML', myarea.innerHTML);

    }


    render() {
        const style = {
            fontWeight: 'bold'
        }
        return (
            <div>
                <p id="test">Select me: <i>italic</i> and <b>bold</b></p>

                Cloned: <span id="cloned"></span>
                <br />
                    As text: <span id="astext"></span>


                <div id="myarea" contentEditable={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam orci, ornare <span style={style}>sed ullamcorper id, eleifend in quam. Nulla facilisi. Aliquam vitae orci arcu. Aenean a nulla volutpat ante</span> ultrices euismod ut et magna. Nulla vitae vulputate urna. Donec tempus, nisi a pharetra placerat, diam nisi aliquam elit, a consectetur magna enim sed ligula. Aliquam iaculis rutrum dui et tristique. Nulla facilisi. Cras eu ante fringilla erat convallis rutrum in ac <b>magna</b>. Praesent porta bibendum augue sit amet rhoncus. Vestibulum nibh quam, posuere non consectetur eget, pharetra sit amet lectus.</div>

                <button onClick={this.makeBold}>Get HTML</button>
            </div>

        );
    }
}

export default Highlight;
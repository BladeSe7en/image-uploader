import React, { useState, useEffect } from "react";

import './Input.css';
import { setInput } from './InputActions';



const view = () => {
  const [input, setInput] = useState('')
  console.log('this is message state in input: ', message)


  // original logic from index.html

  // $(document).ready(function () {
  //   let imagesPreview = function (input, placeToInsertImagePreview) {
  //     if (input.files) {
  //       let filesAmount = input.files.length;
  //       for (i = 0; i < filesAmount; i++) {
  //         let reader = new FileReader();
  //         reader.onload = function (event) {
  //           $($.parseHTML("<img>"))
  //             .attr("src", event.target.result)
  //             .appendTo(placeToInsertImagePreview);
  //         };
  //         reader.readAsDataURL(input.files[i]);
  //       }
  //     }
  //   };
  //   $("#input-files").on("change", function () {
  //     imagesPreview(this, "div.preview-images");
  //   });
  // });

  useEffect(() => {
      let imagesPreview = (input, placeToInsertImagePreview) => {
      if (input.files) {
        let filesAmount = input.files.length;
        for (i = 0; i < filesAmount; i++) {
          let reader = new FileReader();
          reader.onload = function (event) {
            $($.parseHTML("<img>"))
              .attr("src", event.target.result)
              .appendTo(placeToInsertImagePreview);
          };
          reader.readAsDataURL(input.files[i]);
        }
      }
    };
    let element = document.getElementsByClassName('preview-images')

    $("#input-files").on("change", function () {
      imagesPreview( this, element )
    });

  }, []);




  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 mt-3">
          <h4>Node.js upload images - BladeSe7en.com</h4>

          <form className="mt-4"
            action="/upload"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="form-group">
              <input
                type="file"
                name="file"
                id="input-files"
                className="form-control-file border"
                onChange={({ target: { value } }) => setInput(value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <div className="preview-images"></div>
        </div>
      </div>
    </div>
  )
}

export default Input;
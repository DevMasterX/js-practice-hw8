const e=document.querySelector(".feedback-form"),t=JSON.parse(localStorage.getItem("feedback-form-state"))||{};t&&(e.elements.email.value=t.email,e.elements.message.value=t.message),e.addEventListener("input",(function(e){const a="email",r="message";e.target.name===a?(t.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))):e.target.name===r&&(t.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t)))})),e.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.82422ada.js.map

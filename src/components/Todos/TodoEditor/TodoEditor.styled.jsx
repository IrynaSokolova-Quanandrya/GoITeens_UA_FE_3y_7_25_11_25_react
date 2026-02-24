import styled from "styled-components";

export const Form = styled.form`
 max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: #fff;
  font-family: Arial, sans-serif;
  
  label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 12px;
  color: #333;
}

textarea {
  margin-top: 8px;
  padding: 10px;
  min-height: 80px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
  font-size: 14px;
}

textarea:focus {
  outline: none;
  border-color: #4f46e5;
}

 button {
  padding: 10px 16px;
  background: ${p=>p.theme.colors.button};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;
}

 button:hover {
  background: #4338ca;
}
  `
import React from "react";
import { Parser } from "html-to-react";
export default function FormataHtml(props) {
  return <div style={props.style}>{Parser().parse(props.texto)}</div>;
}

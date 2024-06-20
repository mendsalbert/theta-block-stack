import React, { useEffect, useRef, useState } from "react";
import * as go from "gojs";
import Modal from "@/components/ui/modal";

interface DiagramProps {
  nodeDataArray: Array<any>;
  linkDataArray: Array<any>;
}

const Diagram: React.FC<DiagramProps> = ({ nodeDataArray, linkDataArray }) => {
  const diagramRef = useRef(null) as any;
  const [selectedNode, setSelectedNode] = useState(null) as any;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const $ = go.GraphObject.make;

    if (diagramRef.current) {
      const diagram = $(go.Diagram, diagramRef.current, {
        "undoManager.isEnabled": true,
        layout: $(go.LayeredDigraphLayout, { direction: 90 }),
      });

      diagram.nodeTemplate = $(
        go.Node,
        "Auto",
        {
          cursor: "pointer",
          click: (e, node: any) => {
            const nodeData = node.data;
            setSelectedNode(nodeData);
            setIsModalOpen(true);
          },
        },
        $(go.Shape, "RoundedRectangle", {
          fill: "rgba(255, 255, 255, 0.05)", // Transparent background
          stroke: "#19C99D",
          strokeWidth: 1,
          parameter1: 10, // corner radius
        }),
        $(
          go.Panel,
          "Vertical",
          { margin: 10 },
          $(
            go.Picture,
            {
              margin: new go.Margin(0, 0, 10, 0),
              width: 24,
              height: 24,
            },
            new go.Binding("source", "icon")
          ),
          $(
            go.TextBlock,
            {
              font: "bold 14px sans-serif",
              stroke: "#fff",
              textAlign: "center",
              margin: new go.Margin(0, 0, 5, 0),
            },
            new go.Binding("text", "title")
          ),
          $(
            go.TextBlock,
            {
              font: "12px sans-serif",
              stroke: "#aaa",
              textAlign: "center",
              margin: new go.Margin(0, 0, 5, 0),
            },
            new go.Binding("text", "description")
          )
        )
      );

      // Define the link template
      diagram.linkTemplate = $(
        go.Link,
        { routing: go.Link.AvoidsNodes, curve: go.Link.JumpOver },
        $(go.Shape, { strokeWidth: 2, stroke: "#fff" }),
        $(go.Shape, { toArrow: "Standard", stroke: "#fff", fill: "#fff" })
      );

      diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

      return () => {
        diagram.div = null;
      };
    }
  }, [nodeDataArray, linkDataArray]);

  return (
    <div>
      <div ref={diagramRef} style={{ width: "100%", height: "600px" }}></div>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} selectedNode={selectedNode} />
      )}
    </div>
  );
};

export default Diagram;

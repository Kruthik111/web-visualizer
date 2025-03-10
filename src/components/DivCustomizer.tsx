"use client";

import { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { ChromePicker } from "react-color";
import { motion } from "framer-motion";
import Alert from "./Alert";

interface DivStyles {
  backgroundColor: string;
  borderRadius: number;
  width: string;
  height: string;
  boxShadow: string;
  border: string;
  opacity: number;
  marginTop: string;
  marginRight: string;
  marginBottom: string;
  marginLeft: string;
  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;
}

const DivCustomizer = () => {
  const [shadowSettings, setShadowSettings] = useState({
    type: "outset",
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: "#000000",
  });

  const [styles, setStyles] = useState<DivStyles>({
    backgroundColor: "#ffffff",
    borderRadius: 0,
    width: "150px",
    height: "100px",
    boxShadow: "none",
    border: "1px solid #000000",
    opacity: 1,
    marginTop: "0px",
    marginRight: "0px",
    marginBottom: "0px",
    marginLeft: "0px",
    paddingTop: "0px",
    paddingRight: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
  });

  const [showAlert, setShowAlert] = useState(false);

  const updateBoxShadow = () => {
    const { type, x, y, blur, spread, color } = shadowSettings;
    const shadow = `${
      type === "inset" ? "inset" : ""
    } ${x}px ${y}px ${blur}px ${spread}px ${color}`;
    setStyles({ ...styles, boxShadow: shadow });
  };

  return (
    <div className="h-screen flex">
      <PanelGroup direction="horizontal">
        {/* Left Panel - Controls */}
        <Panel defaultSize={20} minSize={10}>
          <div className="h-full bg-white shadow-lg overflow-y-auto">
            <div className="p-4">
              {/* Color Picker */}
              <div className="mb-4 max-w-[240px]">
                <label className="block mb-2 text-gray-800 font-medium">
                  Background Color
                </label>
                <ChromePicker
                  color={styles.backgroundColor}
                  onChange={(color) =>
                    setStyles({ ...styles, backgroundColor: color.hex })
                  }
                />
              </div>

              {/* Border Radius */}
              <div className="mb-4 max-w-[240px]">
                <label className="block mb-2 text-gray-800 font-medium">
                  Border Radius: {styles.borderRadius}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={styles.borderRadius}
                  onChange={(e) =>
                    setStyles({
                      ...styles,
                      borderRadius: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>

              {/* Dimensions */}
              <div className="mb-4 grid grid-cols-2 gap-4 max-w-[320px]">
                <div>
                  <label className="block mb-2 text-gray-800 font-medium">
                    Width
                  </label>
                  <input
                    type="number"
                    value={parseInt(styles.width)}
                    onChange={(e) =>
                      setStyles({ ...styles, width: `${e.target.value}px` })
                    }
                    className="w-full p-2 border rounded text-gray-800 bg-white border-gray-300"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-800 font-medium">
                    Height
                  </label>
                  <input
                    type="number"
                    value={parseInt(styles.height)}
                    onChange={(e) =>
                      setStyles({ ...styles, height: `${e.target.value}px` })
                    }
                    className="w-full p-2 border rounded text-gray-800 bg-white border-gray-300"
                  />
                </div>
              </div>

              {/* Box Shadow Controls */}
              <div className="mb-4 max-w-[320px]">
                <label className="block mb-2 text-gray-800 font-medium">
                  Box Shadow
                </label>
                <div className="flex mb-4 bg-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => {
                      setShadowSettings({ ...shadowSettings, type: "outset" });
                      updateBoxShadow();
                    }}
                    className={`flex-1 py-1 px-2 rounded ${
                      shadowSettings.type === "outset"
                        ? "bg-white shadow-sm"
                        : "text-gray-700"
                    }`}
                  >
                    Outset
                  </button>
                  <button
                    onClick={() => {
                      setShadowSettings({ ...shadowSettings, type: "inset" });
                      updateBoxShadow();
                    }}
                    className={`flex-1 py-1 px-2 rounded ${
                      shadowSettings.type === "inset"
                        ? "bg-white shadow-sm"
                        : "text-gray-700"
                    }`}
                  >
                    Inset
                  </button>
                </div>

                {/* Shadow Controls */}
                <div className="space-y-2">
                  <div className="flex items-center max-w-[240px]">
                    <label className="text-xs text-gray-800 font-medium mr-2 w-20">
                      X Offset: {shadowSettings.x}px
                    </label>
                    <input
                      type="range"
                      min="-50"
                      max="50"
                      value={shadowSettings.x}
                      onChange={(e) => {
                        setShadowSettings({
                          ...shadowSettings,
                          x: Number(e.target.value),
                        });
                        updateBoxShadow();
                      }}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center max-w-[240px]">
                    <label className="text-xs text-gray-800 font-medium mr-2 w-20">
                      Y Offset: {shadowSettings.y}px
                    </label>
                    <input
                      type="range"
                      min="-50"
                      max="50"
                      value={shadowSettings.y}
                      onChange={(e) => {
                        setShadowSettings({
                          ...shadowSettings,
                          y: Number(e.target.value),
                        });
                        updateBoxShadow();
                      }}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center max-w-[240px]">
                    <label className="text-xs text-gray-800 font-medium mr-2 w-20">
                      Blur: {shadowSettings.blur}px
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={shadowSettings.blur}
                      onChange={(e) => {
                        setShadowSettings({
                          ...shadowSettings,
                          blur: Number(e.target.value),
                        });
                        updateBoxShadow();
                      }}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center max-w-[240px]">
                    <label className="text-xs text-gray-800 font-medium mr-2 w-20">
                      Spread: {shadowSettings.spread}px
                    </label>
                    <input
                      type="range"
                      min="-20"
                      max="20"
                      value={shadowSettings.spread}
                      onChange={(e) => {
                        setShadowSettings({
                          ...shadowSettings,
                          spread: Number(e.target.value),
                        });
                        updateBoxShadow();
                      }}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label className="text-sm text-gray-800 font-medium">
                    Shadow Color
                  </label>
                  <input
                    type="color"
                    value={shadowSettings.color}
                    onChange={(e) => {
                      setShadowSettings({
                        ...shadowSettings,
                        color: e.target.value,
                      });
                      updateBoxShadow();
                    }}
                    className="w-8 h-8 p-0 border rounded"
                  />
                </div>
              </div>

              {/* Spacing Controls */}
              <div className="mb-4 max-w-[320px]">
                <label className="block mb-2 text-gray-800 font-medium">
                  Spacing
                </label>

                {/* Margin Controls */}
                <div className="mb-4">
                  <label className="text-sm text-gray-800 font-medium mb-2 block">
                    Margin
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs text-gray-600">Top</label>
                      <input
                        type="number"
                        min="0"
                        value={parseInt(styles.marginTop)}
                        onChange={(e) =>
                          setStyles({
                            ...styles,
                            marginTop: `${e.target.value}px`,
                          })
                        }
                        className="w-full p-2 border rounded text-gray-800 bg-white border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Right</label>
                      <input
                        type="number"
                        min="0"
                        value={parseInt(styles.marginRight)}
                        onChange={(e) =>
                          setStyles({
                            ...styles,
                            marginRight: `${e.target.value}px`,
                          })
                        }
                        className="w-full p-2 border rounded text-gray-800 bg-white border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Bottom</label>
                      <input
                        type="number"
                        min="0"
                        value={parseInt(styles.marginBottom)}
                        onChange={(e) =>
                          setStyles({
                            ...styles,
                            marginBottom: `${e.target.value}px`,
                          })
                        }
                        className="w-full p-2 border rounded text-gray-800 bg-white border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Left</label>
                      <input
                        type="number"
                        min="0"
                        value={parseInt(styles.marginLeft)}
                        onChange={(e) =>
                          setStyles({
                            ...styles,
                            marginLeft: `${e.target.value}px`,
                          })
                        }
                        className="w-full p-2 border rounded text-gray-800 bg-white border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Padding Controls */}
                <div>
                  <label className="text-sm text-gray-800 font-medium mb-2 block">
                    Padding
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs text-gray-600">Top</label>
                      <input
                        type="number"
                        min="0"
                        value={parseInt(styles.paddingTop)}
                        onChange={(e) =>
                          setStyles({
                            ...styles,
                            paddingTop: `${e.target.value}px`,
                          })
                        }
                        className="w-full p-2 border rounded text-gray-800 bg-white border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Right</label>
                      <input
                        type="number"
                        min="0"
                        value={parseInt(styles.paddingRight)}
                        onChange={(e) =>
                          setStyles({
                            ...styles,
                            paddingRight: `${e.target.value}px`,
                          })
                        }
                        className="w-full p-2 border rounded text-gray-800 bg-white border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Bottom</label>
                      <input
                        type="number"
                        min="0"
                        value={parseInt(styles.paddingBottom)}
                        onChange={(e) =>
                          setStyles({
                            ...styles,
                            paddingBottom: `${e.target.value}px`,
                          })
                        }
                        className="w-full p-2 border rounded text-gray-800 bg-white border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Left</label>
                      <input
                        type="number"
                        min="0"
                        value={parseInt(styles.paddingLeft)}
                        onChange={(e) =>
                          setStyles({
                            ...styles,
                            paddingLeft: `${e.target.value}px`,
                          })
                        }
                        className="w-full p-2 border rounded text-gray-800 bg-white border-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <PanelResizeHandle className="w-2 bg-gray-200 hover:bg-gray-300 transition-colors" />

        {/* Center Panel - Preview */}
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full bg-white shadow-lg overflow-y-auto">
            <div className="p-4 h-full flex items-center justify-center">
              <div className="w-[500px] h-[500px] relative bg-gray-100 border border-gray-300">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.1)_1px,transparent_0),linear-gradient(rgba(0,0,0,.1)_1px,transparent_0)] bg-[size:20px_20px]">
                  <div className="w-full h-full flex items-start justify-start p-4">
                    <motion.div
                      style={styles}
                      animate={styles}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="relative text-gray-800">content</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <PanelResizeHandle className="w-2 bg-gray-200 hover:bg-gray-300 transition-colors" />

        {/* Right Panel - Code Export */}
        <Panel defaultSize={30} minSize={20}>
          <div className="h-full bg-white shadow-lg overflow-y-auto">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Generated Code
              </h2>
              <pre className="bg-gray-100 p-4 rounded overflow-auto text-gray-800 font-mono text-sm border border-gray-300">
                {`<div style={{
                 backgroundColor: '${styles.backgroundColor}',
  borderRadius: ${styles.borderRadius}px,
  width: '${styles.width}',
  height: '${styles.height}',
  boxShadow: '${styles.boxShadow}',
  border: '${styles.border}',
  opacity: ${styles.opacity},
  marginTop: '${styles.marginTop}',
  marginRight: '${styles.marginRight}',
  marginBottom: '${styles.marginBottom}',
  marginLeft: '${styles.marginLeft}',
  paddingTop: '${styles.paddingTop}',
  paddingRight: '${styles.paddingRight}',
  paddingBottom: '${styles.paddingBottom}',
  paddingLeft: '${styles.paddingLeft}'
}} />`}
              </pre>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    document.querySelector("pre")?.innerText || ""
                  );
                  setShowAlert(true);
                }}
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 font-medium"
              >
                Copy Code
              </button>
            </div>
          </div>
        </Panel>
      </PanelGroup>
      <Alert
        message="Code copied to clipboard!"
        isVisible={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </div>
  );
};

export default DivCustomizer;

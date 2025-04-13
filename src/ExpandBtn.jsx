import React, { useState, useRef, useEffect } from 'react';

const ExpandButton = ({ id, title, contentText, isAnyExpanded, setAnyExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef();

  const handleToggle = (e) => {
    e.stopPropagation();
    if (!isExpanded) {
      setAnyExpanded(id);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.display = 'none';
        }
        setIsExpanded(false);
        if (setAnyExpanded) setAnyExpanded(null);
      }, 1500);
    }
  };

  useEffect(() => {
    if (isAnyExpanded !== id && isExpanded) {
      handleClose();
    }

    if (isAnyExpanded === id && !isExpanded) {
      setIsExpanded(true);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.display = 'block';
          setTimeout(() => {
            contentRef.current.style.opacity = '1';
          }, 100);
        }
      }, 3000); // Wait for full expansion animation
    }
  }, [isAnyExpanded]);

  return (
    <button
      className={`expand-btn ${isExpanded ? 'expanded' : ''}`}
      id={id}
      style={{
        bottom: '20px',
        left: id === 'btn1' ? '20px' : id === 'btn2' ? '100px' : '180px',
        height: isExpanded ? 'calc(80vh - 40px)' : '50px',
        width: isExpanded ? 'calc(100vw - 40px)' : '50px',
        borderRadius: isExpanded ? '12px' : '8px',
        transition: 'width 1.5s ease, height 1.5s ease, border-radius 1.5s ease',
      }}
    >
      <span className="btn-icon" onClick={handleToggle}>+</span>
      <div
        className="contents"
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'none', opacity: 0 }}
      >
        <h2>{title}</h2>
        <p>{contentText}</p>
      </div>
    </button>
  );
};

const ExpandingButtons = () => {
  const [activeBtnId, setActiveBtnId] = useState(null);

  const handleBackgroundClick = () => {
    setActiveBtnId(null);
  };

  return (
    <>
        <div
            id="background"
            onClick={handleBackgroundClick}
            className={`background ${activeBtnId ? 'blurred' : ''}`}
        />
        <div style={{ position: 'relative', height: '100vh', overflow: 'auto', backgroundColor: '#0000' }}>
        

        <ExpandButton
            id="btn1"
            title="Content 1"
            contentText="This is the content for button 1."
            isAnyExpanded={activeBtnId}
            setAnyExpanded={setActiveBtnId}
        />
        

        <style>{`
            .background {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0);
            backdrop-filter: blur(0px);
            transition: background 1.5s ease, backdrop-filter 1.5s ease;
            z-index: 500;
            pointer-events: none;
            }

            .blurred {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            pointer-events: auto;
            }

            .expand-btn {
            position: fixed;
            background-color: #007bff;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            padding: 0;
            z-index: 1000;
            }

            .btn-icon {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
            cursor: pointer;
            }

            .contents {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 60px;
            color: white;
            padding: 20px;
            transition: opacity 1.5s ease;
            }

            .contents h2 {
            margin-top: 0;
            font-size: 24px;
            }

            .expanded {
            z-index: 1100;
            }
        `}</style>
        </div>
    </>
  );
};

export default ExpandingButtons;

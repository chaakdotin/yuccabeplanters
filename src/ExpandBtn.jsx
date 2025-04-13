import React, { useRef, useEffect, useState } from 'react';


const ExpandButton = ({ id, contentTitle, contentText, position }) => {
  const buttonRef = useRef(null);
  const iconRef = useRef(null);
  const contentsRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    if (!isExpanded) {
      closeAll();
      expand();
    } else {
      close();
    }
  };

  const expand = () => {
    const button = buttonRef.current;
    const contents = contentsRef.current;

    button.style.height = 'calc(64vh - 40px)';
    setTimeout(() => {
      button.style.width = 'calc(57vw - 40px)';
      button.style.borderRadius = '12px';
      button.classList.add('expanded');
      setTimeout(() => {
        contents.style.display = 'block';
        setTimeout(() => {
          contents.style.opacity = '1';
        }, 100);
      }, 1500);
    }, 1500);

    setIsExpanded(true);
  };

  const close = () => {
    const button = buttonRef.current;
    const contents = contentsRef.current;

    contents.style.opacity = '0';
    setTimeout(() => {
      contents.style.display = 'none';
      button.style.width = '50px';
      button.style.borderRadius = '8px';
      button.classList.remove('expanded');
      setTimeout(() => {
        button.style.height = '50px';
        setIsExpanded(false);
      }, 1500);
    }, 1500);
  };

  const closeAll = () => {
    document.querySelectorAll('.expand-btn').forEach((btn) => {
      if (btn !== buttonRef.current && btn.classList.contains('expanded')) {
        btn.querySelector('.btn-icon').click();
      }
    });
  };

  useEffect(() => {
    const contents = contentsRef.current;
    contents.addEventListener('click', (e) => e.stopPropagation());
  }, []);

  return (
    <button
      className="expand-btn"
      id={id}
      ref={buttonRef}
      style={position}
    >
      <span
        className="btn-icon"
        ref={iconRef}
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
      >
        +
      </span>
      <div className="contents" ref={contentsRef}>
        <h2>{contentTitle}</h2>
        <p>{contentText}</p>
      </div>
    </button>
  );
};

const ExpandBtn = () => {
    


  return (
    <>
    <style>
        {`
            
            .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
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
                width: 50px;
                height: 50px;
                background-color: #d9d4c5;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                display: flex;
                align-items: flex-end;
                justify-content: flex-start;
                padding: 0;
                transition: width 1.5s ease, height 1.5s ease, border-radius 1.5s ease;
                z-index: 999999;
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
            display: none;
            color: white;
            padding: 20px;
            opacity: 0;
            transition: opacity 1.5s ease;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 60px;
            }

            .contents h2 {
            margin-top: 0;
            font-size: 24px;
            }

            .expanded {
            width: calc(100vw - 40px);
            height: calc(100vh - 40px);
            border-radius: 12px;
            z-index: 1100;
            }
            
        `}
    </style>
      <ExpandButton
        id="btn1"
        contentTitle="Content 1"
        contentText="This is the content for button 1."
        position={{ bottom: '20px', left: '20px' }}
      />
      
    </>
  );
};

export default ExpandBtn;

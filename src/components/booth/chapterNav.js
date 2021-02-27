import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import { Link } from "react-router-dom";

const Chapternav = () => {
  const { departmentObj } = useContext(PortfolioContext);
  const { id, contains } = departmentObj;
  useEffect(() => {
    function isTouch() {
      return !!(
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }
    const touchDevice = isTouch();
    const a = document.getElementsByTagName("html");
    console.log(a);
    // if (!touchDevice) {
    //   document.getElementsByTagName("html")[0].classList.add("touch");
    // }

    if (touchDevice) {
      const debouncedResize = debounce(handleResizeEvent, 100);

      window.removeEventListener("resize", debouncedResize);
      window.addEventListener("resize", debouncedResize);

      const leftPaddle = ".chapternav-paddle-left";
      const rightPaddle = ".chapternav-paddle-right";
      const startOfList = "left";
      const endOfList = "right";
      const items = Array.from(document.querySelectorAll(".chapternav-item"));
      const navItems = document.querySelector(".chapternav-items");
      const itemPadding = 40;
      const itemsWidth = items.reduce(function (sum, item) {
        return sum + item.clientWidth + itemPadding;
      }, 0);
      // In the future build this list out of items array
      const observedItems = items
        .map(function (item, index) {
          return {
            name: item.textContent.replace(/\s/g, ""),
            visible: false,
            index,
          };
        })
        .reduce(function (list, current) {
          return { ...list, [current.name]: current };
        }, {});
      // Object to track which request animation frame callbacks are active
      const rafTickers = {
        resizeTicker: true,
        hidePreviousPaddle: false,
        hideNextPaddle: false,
        showPreviousPaddle: false,
        showNextPaddle: false,
      };

      let width = window.innerWidth;

      requestAnimationFrame(updatePaddles);

      items.forEach(function (item) {
        setObserversOnItem(item);
      });

      function handleResizeEvent(e) {
        if (
          (width < itemsWidth && window.innerWidth >= itemsWidth) ||
          (width >= itemsWidth && window.innerWidth < itemsWidth)
        ) {
          updatePaddles();
        }

        width = window.innerWidth;
      }

      function handlePaddleClick(e) {
        const forward = e.target.classList.contains("chapternav-paddle-right");
        // Number of items to scroll
        const nextGroupLength = numItemsVisible();
        const observedArray = Object.values(observedItems);
        const visibleItems = observedArray
          .filter(function (value) {
            return value.visible;
          })
          .sort(function (a, b) {
            return a.index - b.index;
          });
        // Probably need to use this for something related to scrolling the list
        let hiddenItemIndex;

        if (forward) {
          const lastVisibleIndex = visibleItems[visibleItems.length - 1].index;
          const hiddenItems = observedArray
            .filter(function (value) {
              return !value.visible && value.index > lastVisibleIndex;
            })
            .sort(function (a, b) {
              return a.index - b.index;
            });

          if (hiddenItems.length < nextGroupLength) {
            // Only scroll the length of hidden items
            const lastHiddenItem = hiddenItems[hiddenItems.length - 1];
            items[lastHiddenItem.index].scrollIntoView({ behavior: "smooth" });
            hiddenItemIndex = lastHiddenItem.index;
          } else {
            // Scroll the length of nextGroupLength
            // Only scroll the length of hidden items
            const lastHiddenItem = hiddenItems[nextGroupLength - 1];
            items[lastHiddenItem.index].scrollIntoView({ behavior: "smooth" });
            hiddenItemIndex = lastHiddenItem.index;
          }
        } else {
          const firstVisibleIndex = visibleItems[0].index;
          const hiddenItems = observedArray
            .filter(function (value) {
              return !value.visible && value.index < firstVisibleIndex;
            })
            .sort(function (a, b) {
              if (a.index < b.index) return -1;
              if (a.index > b.index) return 1;
              return 0;
            });

          if (hiddenItems.length < nextGroupLength) {
            // Only scroll the length of hidden items
            const firstHiddenItem = hiddenItems[0];
            items[firstHiddenItem.index].scrollIntoView({ behavior: "smooth" });
            hiddenItemIndex = firstHiddenItem.index;
          } else {
            // Scroll the length of nextGroupLength
            // Only scroll the length of hidden items
            const firstHiddenItem =
              hiddenItems[firstVisibleIndex - nextGroupLength + 1];
            items[firstHiddenItem.index].scrollIntoView({ behavior: "smooth" });
            hiddenItemIndex = firstHiddenItem.index;
          }
        }
      }

      // raf update functions
      function updatePaddles() {
        // If navItems scrollLeft is 0 don't show the left paddle
        // If navItems scrollLeft equals scrollWidth don't show the right paddle
        console.log("itemsWidth", itemsWidth, "width", width);
        if (width < itemsWidth) {
          // Enable
          if (navItems.scrollLeft !== 0) {
            hideShowRafCall(false, startOfList);
            console.log("false, left");
          }
          if (navItems.scrollLeft !== navItems.scrollWidth) {
            hideShowRafCall(false, endOfList);
            console.log("false, right");
          }
        } else {
          // Disable left and right paddles
          hideShowRafCall(true, startOfList);
          console.log("true, left");
          hideShowRafCall(true, endOfList);
          console.log("true, right");
        }
      }
      // Add aria-hidden attributes to hide/show functions
      function hidePaddle(className, ticker) {
        const paddle = document.querySelector(className);
        paddle.disabled = true;
        paddle.setAttribute("aria-hidden", true);
        paddle.removeEventListener("click", handlePaddleClick);
        rafTickers[ticker] = false;
      }

      function showPaddle(className, ticker, direction) {
        const atStart = navItems.scrollLeft === 0 && direction === startOfList;
        const atEnd =
          navItems.scrollLeft === navItems.scrollWidth &&
          direction === endOfList;

        if (width < itemsWidth && !atStart && !atEnd) {
          const paddle = document.querySelector(className);
          console.log("show paddle called");
          paddle.disabled = false;
          paddle.setAttribute("aria-hidden", false);
          // Removing event listener first to ensure there is only ever one
          paddle.removeEventListener("click", handlePaddleClick);
          paddle.addEventListener("click", handlePaddleClick);
        }
        rafTickers[ticker] = false;
      }

      // End raf update functions
      function setObserversOnItem(item) {
        const options = {
          root: navItems,
          rootMargin: "0px",
          threshold: 0.9,
        };
        const observer = new IntersectionObserver(observerCallback, options);
        observer.observe(item);
      }

      function observerCallback(entries, observer) {
        entries.forEach(function (entry) {
          console.log(entry)
          console.log(observedItems);
          console.log(observedItems[entry.target.innerText]);
          observedItems[entry.target.innerText].visible = entry.isIntersecting;
          if (
            observedItems[entry.target.textContent].index === 0 &&
            entry.isIntersecting
          ) {
            hideShowRafCall(true, startOfList);
          } else if (
            observedItems[entry.target.textContent].index === 0 &&
            !entry.isIntersecting
          ) {
            hideShowRafCall(false, startOfList);
          } else if (
            observedItems[entry.target.textContent].index === numItemsObserved() - 1 &&
            entry.isIntersecting
          ) {
            hideShowRafCall(true, endOfList);
          } else if (
            observedItems[entry.target.textContent].index === numItemsObserved() - 1 &&
            !entry.isIntersecting
          ) {
            hideShowRafCall(false, endOfList);
          }
        });
      }

      function hideShowRafCall(hide, direction) {
        if (hide && direction === startOfList) {
          // Hide previous paddle button
          if (!rafTickers.hidePreviousPaddle) {
            requestAnimationFrame(function () {
              hidePaddle(leftPaddle, "hidePreviousPaddle");
            });
            rafTickers.hidePreviousPaddle = true;
          }
        } else if (hide && direction === endOfList) {
          // Hide next paddle button
          if (!rafTickers.hideNextPaddle) {
            requestAnimationFrame(function () {
              hidePaddle(rightPaddle, "hideNextPaddle");
            });
            rafTickers.hideNextPaddle = true;
          }
        } else if (!hide && direction === startOfList) {
          // Show previous paddle button
          if (!rafTickers.showPreviousPaddle) {
            requestAnimationFrame(function () {
              showPaddle(leftPaddle, "showPreviousPaddle", startOfList);
            });
            rafTickers.showPreviousPaddle = true;
          }
        } else if (!hide && direction === endOfList) {
          // Show next paddle button
          if (!rafTickers.showNextPaddle) {
            requestAnimationFrame(function () {
              showPaddle(rightPaddle, "showNextPaddle", endOfList);
            });
            rafTickers.showNextPaddle = true;
          }
        }
      }

      function numItemsVisible() {
        return Object.values(observedItems).filter(function (value) {
          return value.visible;
        }).length;
      }

      function numItemsObserved() {
        return items.length;
      }

      function debounce(callback, wait, immediate) {
        let timeout;
        return function () {
          const context = this;
          const args = arguments;
          const callbackForTimeout = function () {
            timeout = null;
            if (!immediate) {
              callback.apply(context, args);
            }
          };
          clearTimeout(timeout);
          timeout = setTimeout(callbackForTimeout, wait);
          if (immediate && !timeout) {
            callback.apply(context, args);
          }
        };
      }
    }
  }, []);

  return (
    <nav id="chapternav" className="chapternav">
      <div className="chapternav-wrapper">
        <ul className="chapternav-items">
          {contains &&
            contains.map((contain) => {
              const url = `/booth/${id}/${contain.key}`;
              // const url = `./${name}/${contain}`;
              return (
                <li id={contain.key} className="chapternav-item">
                  <a className="chapternav-link" href={url}>
                    <figure className="chapternav-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="32"
                        viewBox="0 0 40 32"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill="#206CBC"
                            d="M13.6861477,0.522466649 C13.6861477,0.254332585 13.4712918,0.0370100467 13.2062909,0.0370100467 L2.21289349,0.0386543029 C1.94789262,0.0386543029 0.263475575,0.311480512 0.218688947,1.9139886 L0.0369032274,18.3234644 C0.0369032274,18.5915985 0.251759073,18.808921 0.516759946,18.808921 L11.6998208,18.8057929 C13.5994935,18.6969111 13.6944652,17.2230961 13.7044622,16.8571489 L13.6861477,0.522466649 L13.6861477,0.522466649 Z M11.1445066,17.8468307 L1.54833193,17.8496379 C1.32091983,17.8496379 1.28980912,17.6822848 1.28980912,17.4421833 L1.29252831,2.72043608 C1.30980315,1.26711417 2.77636524,1.0410891 3.00373735,1.0410891 L3.13593788,1.0410891 L3.13593788,8.17146605 L4.4068384,6.16218503 L5.76183381,8.17146605 L5.76183381,1.04064796 L12.4372006,1.03960526 C12.6646127,1.03960526 12.8489976,1.23426915 12.8489976,1.47433054 L12.8647129,16.1018739 C12.8561155,16.4295621 12.7930543,17.8167929 11.1445066,17.8468307 L11.1445066,17.8468307 Z"
                            transform="translate(15.775 13.054)"
                          />
                          <path
                            fill="#0C0C0C"
                            d="M34.3369862,10.2810922 C34.3418151,10.1321129 34.3801596,9.99277821 34.3801596,9.8437168 C34.3801187,4.40757191 29.9852681,0 24.564854,0 C20.8888922,0 17.7233589,2.0523852 16.0411092,5.05167152 C15.6217336,4.97714081 15.1928229,4.9218584 14.7495075,4.9218584 C11.5336803,4.9218584 8.82819983,7.00305448 7.82657623,9.88697416 C7.6804004,9.87741157 7.53901253,9.8437168 7.38804875,9.8437168 C3.3238943,9.8437168 0.0265490844,13.1505654 0.0265490844,17.2265249 C0.0265490844,21.3024024 3.32385338,24.609292 7.38804875,24.609292 L13.4041743,24.609292 L13.4041743,22.1483833 L7.38804875,22.1483833 C4.68260923,22.1483833 2.48039595,19.9421759 2.48039595,17.2265249 C2.48039595,14.5396848 4.64185024,12.3479239 7.31135964,12.3046665 C7.42639331,12.3214934 7.546174,12.3359399 7.66603654,12.3431221 L9.53035123,12.4656709 L10.1438232,10.6992603 C10.8339433,8.71422366 12.6838941,7.38276708 14.7495075,7.38276708 C14.9891098,7.38276708 15.2527337,7.411619 15.6074106,7.47416569 L17.3255495,7.7841494 L18.1810382,6.25807575 C19.4942471,3.91737656 21.9384771,2.46094972 24.564854,2.46094972 C28.595411,2.46094972 31.8783923,5.72458201 31.9263128,9.75244131 C31.907161,9.90150272 31.8927562,10.050441 31.8879682,10.2042632 L31.8256839,12.0114686 L33.5318324,12.607468 C35.5063928,13.2972054 36.8339656,15.1548914 36.8339656,17.2265249 C36.8339656,19.9421759 34.6341258,22.1483833 31.9262719,22.1483833 L29.5277115,22.1483833 L29.5277115,24.609292 L31.9262719,24.609292 C35.9904263,24.609292 39.2877715,21.3024024 39.2877715,17.2265249 C39.2877715,14.0013482 37.2125413,11.2856561 34.3369862,10.2810922 L34.3369862,10.2810922 Z"
                            transform="translate(.067 .005)"
                          />
                        </g>
                      </svg>
                    </figure>
                    <span className="chapternav-label">{contain.name}</span>
                  </a>
                </li>
              );
            })}
        </ul>
        <div className="chapternav-paddles">
          <button
            id="left-paddle"
            className="chapternav-paddle chapternav-paddle-left"
            aria-hidden="true"
            disabled
          ></button>
          <button
            id="right-paddle"
            className="chapternav-paddle chapternav-paddle-right"
            aria-hidden="true"
            disabled
          ></button>
        </div>
      </div>
    </nav>
  );
};

export default Chapternav;

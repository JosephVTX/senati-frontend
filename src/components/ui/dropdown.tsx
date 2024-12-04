import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { usePopper } from "react-popper";

const Dropdown = (props: any, forwardedRef: any) => {
  const [visibility, setVisibility] = useState<any>(false);
  const [placement, setPlacement] = useState<any>(
    props.placement || "bottom-end"
  );

  const referenceRef = useRef<any>();
  const popperRef = useRef<any>();

  const { styles, attributes, update } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: props.offset || [0],
          },
        },
      ],
    }
  );

  const handleDocumentClick = (event: any) => {
    if (
      referenceRef.current?.contains(event.target) ||
      popperRef.current?.contains(event.target)
    ) {
      return;
    }

    setVisibility(false);
  };

  const handleVisibilityChange = () => {
    if (popperRef.current) {
      const rect = popperRef.current.getBoundingClientRect();
      if (
        rect.bottom >
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setPlacement("top-end");
        update?.();
      } else {
        setPlacement(props.placement || "bottom-end");
        update?.();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (visibility) {
      handleVisibilityChange();
    }
  }, [visibility]);

  useImperativeHandle(forwardedRef, () => ({
    close() {
      setVisibility(false);
    },
  }));

  return (
    <>
      <button
        ref={referenceRef}
        type="button"
        className={props.btnClassName}
        onClick={() => setVisibility(!visibility)}
      >
        {props.button}
      </button>

      <div
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
        className="z-50"
        onClick={() => setVisibility(!visibility)}
      >
        {visibility && props.children}
      </div>
    </>
  );
};

export default forwardRef(Dropdown);

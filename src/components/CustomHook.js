import { useEffect, useState } from "react";

const useDocTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return [title, setTitle];
};

export default useDocTitle;

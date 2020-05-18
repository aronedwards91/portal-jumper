import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style";
import Icon from "../Icon";

const ListItem = ({ icon, title, sub, text, moreText, notes }) => {
  const [showMore, setShowMore] = useState(false);
  const [showNoteList, setShowNoteList] = useState(false);
  const [notesShown, setNotesShown] = useState([false]);

  const switchShowMore = () => setShowMore(!showMore);
  const switchShowNoteList = () => setShowNoteList(!showNoteList);
  const switchShowNote = index => {
    let noteArray = notesShown.slice();
    noteArray[index] = !notesShown[index];
    setNotesShown(noteArray);
  };

  return (
    <div class={style.container}>
      {icon && (
        <div class={style.icon}>
          <img src={icon} alt={`icon-${title}`} class={style.iconImg} />
        </div>
      )}
      <div class={style.textHolder}>
        <div class={style.textTitle}>{title}</div>
        <div class={style.textSubtitle}>{sub}</div>
        <div class={style.textMain}>{text}</div>
        {moreText && !showMore && (
          <div onClick={switchShowMore} class={style.moreTextBtn}>
            ...More
          </div>
        )}
        {showMore && <div class={style.moreText}>{moreText}</div>}
        {moreText && showMore && (
          <div onClick={switchShowMore} class={style.moreTextBtn}>
            ...Less
          </div>
        )}
        {notes && (
          <div class={style.notesTitle}>
            Notes...
            <div class={style.notesExpandIcon} onClick={switchShowNoteList}>
              {showNoteList ? <Icon name="keyboard_arrow_up1" /> : <Icon />}
            </div>
            {showNoteList && (
              <div class={style.notesDropBox}>
                {notes.map((note, index) => (
                  <div class={style.noteBox}>
                    <div class={style.noteTitle}>{`${index + 1} ) ${
                      note.title
                    }`}</div>
                    <div
                      class={style.notesExpandIcon}
                      onClick={() => switchShowNote(index)}
                    >
                      {notesShown[index] ? (
                        <Icon name="keyboard_arrow_up1" />
                      ) : (
                        <Icon />
                      )}
                    </div>
                    {notesShown[index] && (
                      <div class={style.noteText}>{note.text}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export const SmListItem = ({ icon, title, link, text }) => {
  let linkText = null;
  if (link) {
    linkText = link.replace("https://www.", "");
    linkText = linkText.replace("http://www.", "");
    linkText = linkText.replace("www.", "");
  }

  return (
    <div class={style.container}>
      {icon ? (
        <div class={style.icon}>
          <img src={icon} alt={`icon${title}`} class={style.iconImg} />
        </div>
      ) : null}
      <div class={style.SmTextHolder}>
        <div class={style.textTitle}>{title}</div>
        {link && (
          <a class={style.link} href={link} target="_target">
            {linkText}
          </a>
        )}
        {text && <div class={style.textMain}>{text}</div>}
      </div>
    </div>
  );
};

export default ListItem;

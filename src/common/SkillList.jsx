function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="check mark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;

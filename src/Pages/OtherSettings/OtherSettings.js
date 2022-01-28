import AddTemplate from '../../Component/Add/AddTemplate/AddTemplate';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import OtherSettingsInfo from './OtherSettingsInfo';

export default function OtherSettings() {
  const title = '기타 설정 ';
  const subtitle = [{ title: '감사카드 제공' }];

  return (
    <>
      <TitleTemplate title={title} />
      {subtitle.map((list, index) => {
        return (
          <AddTemplate key={index} subtitle={list.title}>
            {index === 0 && <OtherSettingsInfo />}
          </AddTemplate>
        );
      })}
    </>
  );
}

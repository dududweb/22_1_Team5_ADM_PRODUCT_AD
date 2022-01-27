import * as S from './Nav_Style';
import { NAV_DATA } from './navData';
import ExpandMore from '../Icon/expand_more_black_24dp';

export default function Nav() {
  return (
    <S.Nav>
      <S.Logo>LOGO</S.Logo>

      <S.CategoryWrapper>
        {NAV_DATA?.map(data => {
          return (
            <S.MainCategoryWrapper>
              <S.MainCategory key={data.id}>
                {data.value}
                <ul>
                  {data.list.map(data => {
                    return (
                      <S.SubCategory key={data.id}>{data.value}</S.SubCategory>
                    );
                  })}
                </ul>
              </S.MainCategory>
              <ExpandMore />
            </S.MainCategoryWrapper>
          );
        })}
      </S.CategoryWrapper>
    </S.Nav>
  );
}

import React from 'react';
import AddTemplate from '../../Component/Add/AddTemplate/AddTemplate';
import TitleTemplate from '../../Component/Add/TitleTemplate/TitleTemplate';
import { ContentsBox } from '../MainContents_Style';
import SalesPeriodCheckBox from './SalesPeriodCheckBox';
import ProductExposurePeriod from './ProductExposurePeriod';

export default function SalesPeriod() {
  const title = '노출 및 판매기간 설정';
  const subtitle = [{ title: '상품 노출 기한' }, { title: '상품 판매 기한' }];
  return (
    <ContentsBox>
      <TitleTemplate title={title} />
      {subtitle.map((list, index) => {
        return (
          <AddTemplate
            subtitle={list.title}
            contents={list.contents}
            key={index}
          >
            {index === 0 && <ProductExposurePeriod />}
            {index === 1 && <SalesPeriodCheckBox />}
          </AddTemplate>
        );
      })}
    </ContentsBox>
  );
}

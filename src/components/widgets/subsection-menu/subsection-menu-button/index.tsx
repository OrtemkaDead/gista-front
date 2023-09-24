// import { Button } from '@/components/shared'
// import { FC, useState } from 'react'

// import { ISubsectionMenuButton } from './subsection-menu-button.types'

// export const SubsectionMenuButton: FC<ISubsectionMenuButton> = ({}) => {
//   const [isModalOpened, setIsModalOpened] = useState(false)

//   return (
//     <>
//       <Button
//         iconName={iconName}
//         iconSide="left"
//         type="borderless"
//         onClick={openModal}
//       ></Button>

//       {isModalOpened && (
//         <ModalLayout
//           onClose={closeModal}
//           exitIcon
//         >
//           <ModalContent
//             title={textButton}
//             content={
//               <EditCurriculum
//                 formFor={buttonFor}
//                 cancel={closeModal}
//                 selectList={selectList}
//               />
//             }
//           />
//         </ModalLayout>
//       )}
//     </>
//   )
// }

import React from 'react'

const Education = () => {
  return (
     <div className='mx-2 md:mx-[2.6rem] lg:mx-[4rem] xl:mx-[5rem]' id='education'>
        <h1 className='inline'>Education</h1>
        <table className='min-w-full border border-gray-300 text-left mt-2 [&_*]:border [&_*]:border-gray-300 [&_*]:px-2 [&_*]:py-1 md:[&_*]:px-4 md:[&_*]:py-2'>
          <thead>
            <tr>
              <th></th>
              <th>Institution</th>
              <th>Completed Year</th>
              <th>Score</th> 
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>School</th>
              <td>St Joseph English Academy</td>
              <td>2020</td>
              <td>3.45 GPA</td>
            </tr>

            <tr>
              <th>+2</th>
              <td>Southwestern State College</td>
              <td>2022</td>
              <td>3.55 GPA</td>
            </tr>

            <tr>
              <th>Bachelor</th>
              <td>Southwestern State College</td>
              <td>Ongoing - 2027</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Education
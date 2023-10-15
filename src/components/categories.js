import React from 'react'
import Frame1 from "../Images/Frame 36.png"
import Frame2 from "../Images/Frame 38.png"
import Frame3 from "../Images/Frame 37.png"

const Categories = () => {
	return (
		<section className="categories-sections mt-5">
			<div className="row">
				<div className="col-12">
					<div className='heading'>
						<h1 className="header">Categories</h1>

						<p className="title">
							Find what you are looking for
						</p>
					</div>
				</div>

				<div className="col">
					<div className="categories-detail mt-5">
						<div className="row">
							<div className="col-md-12 col-lg-4">
								<div className='box-middle custom-margin-bottom'>
									<img className="" src={Frame1} alt=""></img>
									<h3 className="header">
										Natural Plants
									</h3>
								</div>

							</div>

							<div className="col-md-12 col-lg-4">
								<div className='box-middle custom-margin-top'>
									<img className="" src={Frame2} alt=""></img>
									<h3 className="header">
										Plant Accessories
									</h3>

									<p className="title">
										Horem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>

									<button className='explore'>
										Explore
									</button>
								</div>
							</div>

							<div className="col-md-12 col-lg-4">
								<div className='box-middle custom-margin-bottom-last'>
									<img className="" src={Frame3} alt=""></img>
									<h3 className="header">
										Natural Plants
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</section>
	)
}

export default Categories


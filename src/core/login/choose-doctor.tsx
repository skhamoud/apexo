import './login.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { API } from '../';
import { Dropdown, PrimaryButton, TextField } from 'office-ui-fabric-react';
import { Label, LabelType } from '../../assets/components/label/label.component';
import { data } from '../../modules';
import { login } from './data.login';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export class ChooseDoctor extends React.Component<{}, {}> {
	@observable newDoc: boolean = false;
	newDocNameTextField: TextField;
	render() {
		return (
			<div className="container m-t-50" style={{ maxWidth: '400px' }}>
				<div className="pivot m-b-10">
					{data.doctorsData.doctors.list.length > 0 ? (
						<Label
							text="Already registered"
							type={!this.newDoc ? LabelType.primary : LabelType.info}
							onClick={() => (this.newDoc = false)}
						/>
					) : (
						''
					)}

					<Label
						text="New Doctor"
						type={this.newDoc ? LabelType.primary : LabelType.info}
						onClick={() => (this.newDoc = true)}
					/>
				</div>
				{this.newDoc || data.doctorsData.doctors.list.length === 0 ? (
					<div>
						<TextField
							ref={(field) => (field ? (this.newDocNameTextField = field) : '')}
							label="Your name"
						/>
						<PrimaryButton
							text="Register"
							onClick={() => {
								if (!this.newDocNameTextField.value) {
									return;
								}
								const newDoctor = new data.doctorsData.Doctor();
								newDoctor.name = this.newDocNameTextField.value;
								data.doctorsData.doctors.list.push(newDoctor);
								login.currentDoctorID = newDoctor._id;
							}}
						/>
					</div>
				) : (
					<Dropdown
						placeHolder="Who are you?"
						options={data.doctorsData.doctors.list.map((doctor) => {
							return {
								key: doctor._id,
								text: doctor.name
							};
						})}
						onChanged={(doctor) => {
							login.currentDoctorID = doctor.key.toString();
							API.router.go([ '' ]);
						}}
					/>
				)}
			</div>
		);
	}
}
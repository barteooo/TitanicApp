import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PredictionApi from "../api/PredictionApi";

// Schemat walidacji Yup
const validationSchema = Yup.object({
    age: Yup.number().required('Age is required').positive('Age must be greater than zero'),
    no_sibling_spouses: Yup.number().required('Number of siblings/spouses is required').min(0, 'Cannot be negative'),
    no_parents_children: Yup.number().required('Number of parents/children is required').min(0, 'Cannot be negative'),
    fare: Yup.number().required('Fare is required').positive('Fare must be positive'),
    sex_male: Yup.string().required('Sex is required'),
    passenger_class_2: Yup.boolean(),
    passenger_class_3: Yup.boolean(),
    embarked_Q: Yup.boolean(),
    embarked_S: Yup.boolean()
});
const PredictionForm = () => {
    const [result, setResult] = useState('');
    return (
        <div className="form-container">
            <h1 className="form-caption">Check Your Chance of Survival on the Titanic</h1>
            <Formik
                initialValues={{
                    age: '',
                    no_sibling_spouses: '',
                    no_parents_children: '',
                    fare: '',
                    sex_male: '',
                    passenger_class_2: false,
                    passenger_class_3: false,
                    embarked_Q: false,
                    embarked_S: false
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    const formattedValues = {
                        ...values,
                        sex_male: parseInt(values.sex_male),
                        passenger_class_2: values.passenger_class_2 ? 1 : 0,
                        passenger_class_3: values.passenger_class_3 ? 1 : 0,
                        embarked_Q: values.embarked_Q ? 1 : 0,
                        embarked_S: values.embarked_S ? 1 : 0
                    };
                    const response = await PredictionApi.predictSurvival(formattedValues);
                    setSubmitting(false);
                    setResult(`Prediction: ${response.success ? (response.survived ? "Survived" : "Did not survive") : "Error: " + response.message}`);
                }}
            >
                {formik => (
                    <Form className="form">
                        <div className="form-item">
                            <label className="form-label">Age</label>
                            <Field className="input" name="age" type="number" placeholder="Age" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">Siblings/Spouses Aboard</label>
                            <Field className="input" name="no_sibling_spouses" type="number" placeholder="No. of Siblings/Spouses" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">Parents/Children Aboard</label>
                            <Field className="input" name="no_parents_children" type="number" placeholder="No. of Parents/Children" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">Ticket Fare</label>
                            <Field className="input" name="fare" type="number" placeholder="Ticket Fare" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">Sex</label>
                            <Field as="select" name="sex_male" className="input">
                                <option value="">Select Gender</option>
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </Field>
                        </div>

                        <div className="form-checkbox-container">
                            <div className="form-item-checkbox">
                                <label className="form-label-checkbox">Second Class</label>
                                <Field type="checkbox" name="passenger_class_2" />
                            </div>
                            <div className="form-item-checkbox">
                                <label className="form-label-checkbox">Third Class</label>
                                <Field type="checkbox" name="passenger_class_3" />
                            </div>
                        </div>

                        <div className="form-checkbox-container">
                            <div className="form-item-checkbox">
                                <label className="form-label-checkbox">Embarked at Queenstown</label>
                                <Field type="checkbox" name="embarked_Q" />
                            </div>
                            <div className="form-item-checkbox">
                                <label className="form-label-checkbox">Embarked at Southampton</label>
                                <Field type="checkbox" name="embarked_S" />
                            </div>
                        </div>

                        <div className="form-item form-item-center">
                            <button className="primary-button" type="submit" disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}>
                                Check Chance of Survival
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            {result && <div className="result">{result}</div>}
        </div>
    );
};

export default PredictionForm;

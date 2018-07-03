import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import { createPost} from '../actions';
class PostsNew extends Component{
  renderField(field){
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger':''}`
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        <small className= 'text-help'>
          {field.meta.touched ? field.meta.error :''}
        </small>
      </div>
    );
  }

  onSubmit(values){
    console.log(values);
    this.props.createPost(values,() =>{
      this.props.history.push('/')
    });
  }

  render() {
    const { handleSubmit } =this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label ='Content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className= 'btn btn-danger'>Go to Posts</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values);
  const errors = {};
  if (!values.title) {
    errors.title='Enter titl';
  }
  if (!values.categories) {
    errors.categories='Enter cat';
  }
  if (!values.content) {
    errors.content='Enter cont';
  }
  console.log(errors);
  return errors;
}

export default reduxForm({
  validate,
  form:'PostsNewForm'
}) (
  connect(null,{createPost})(PostsNew)
);

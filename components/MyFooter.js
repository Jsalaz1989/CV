import './MyFooter.css'

export default () => (
    <div className='foot'>
        <div>
            Graduation and briefcase icons made, respectively, by&nbsp;
            <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> 
            &nbsp;and&nbsp; 
            <a href="https://www.freepik.com/?__hstc=57440181.2b280e4850f4c1ec2089ed375686d7f8.1563036135837.1563541010050.1563544657064.8&__hssc=57440181.3.1563544657064&__hsfp=2910948437" title="Freepik">Freepik</a>&nbsp; 
            from <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a>&nbsp;
            licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </div>
        <div className='my-copyright'>Jaime Salazar Lahera &copy; {new Date().getFullYear()}</div>
    </div>
)
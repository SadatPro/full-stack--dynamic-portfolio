
import React, { useState } from 'react';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import { PortfolioData, Project, Experience, Education, Skill, Language, Achievement, Tool, Collaboration } from '../../types';
import { CheckIcon } from '../../assets/icons';

interface ContentEditorProps {
  onLogout: () => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ onLogout }) => {
  const { data, setData } = usePortfolioData();
  const [formData, setFormData] = useState<PortfolioData>(data || {
    home: { name: '', taglines: [], professionalFocus: [] },
    about: { imageUrl: '', bio: '', skills: [], experience: [], collaborations: [], education: [], languages: [] },
    skillsAndTools: { frontend: [], backend: [], tools: [] },
    projects: [],
    achievements: [],
    galleryImages: []
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section: keyof PortfolioData, field: string) => {
    const { value } = e.target;
    setFormData(prev => ({
        ...prev,
        [section]: {
            ...prev[section],
            [field]: value
        }
    }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section: keyof PortfolioData, index: number, field: string) => {
    const { name, value } = e.target;
    const array = (formData[section] as any)[field] as any[];
    const updatedArray = [...array];

    let processedValue: any = value;
    if (name === 'level' || name === 'id') {
      processedValue = Number(value);
    } else if (name === 'techStack' || name === 'responsibilities') {
      processedValue = value.split(',').map(s => s.trim());
    }

    updatedArray[index] = { ...updatedArray[index], [name]: processedValue };
    
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [field]: updatedArray
      }
    }));
  };
  
  const handleSimpleArrayChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, index: number, field: keyof PortfolioData) => {
      const {name, value} = e.target;
      const array = formData[field] as any[];
      const updatedArray = [...array];
      
      let processedValue: any = value;
      if (name === 'techStack') {
        processedValue = value.split(',').map(s => s.trim());
      } else if (name === 'id') {
        processedValue = Number(value);
      }

      updatedArray[index] = {...updatedArray[index], [name]: processedValue};

      setFormData(prev => ({...prev, [field]: updatedArray}));
  }

  const handleAddItem = (field: keyof PortfolioData, subField?: keyof PortfolioData['about'] | keyof PortfolioData['home']) => {
    let newItem: any;
    const targetField = subField ? `${String(field)}.${String(subField)}` : String(field);

    switch(targetField) {
        case 'home.professionalFocus': newItem = {id: Date.now(), title: '', description: ''}; break;
        case 'about.skills': newItem = {name: '', level: 0}; break;
        case 'about.experience': newItem = {id: Date.now(), role: '', company: '', period: '', responsibilities: []}; break;
        case 'about.collaborations': newItem = {id: Date.now(), organization: '', role: '', description: ''}; break;
        case 'about.education': newItem = {id: Date.now(), degree: '', institution: '', period: ''}; break;
        case 'about.languages': newItem = {id: Date.now(), name: '', proficiency: ''}; break;
        case 'projects': newItem = {id: Date.now(), title: '', description: '', techStack: []}; break;
        case 'achievements': newItem = {id: Date.now(), icon: 'Trophy', title: '', date: '', description: ''}; break;
        case 'galleryImages': newItem = {id: Date.now(), url: '', alt: ''}; break;
        case 'skillsAndTools': newItem = {id: Date.now(), name: '', iconUrl: '', category: ''}; break;
        default: return;
    }
    
    if (subField) {
        setFormData(prev => ({...prev, [field]: {...prev[field], [subField]: [...(prev[field] as any)[subField], newItem]}}));
    } else {
        setFormData(prev => ({...prev, [field]: [...(prev as any)[field], newItem]}));
    }
  };

  const handleRemoveItem = (index: number, field: keyof PortfolioData, subField?: keyof PortfolioData['about'] | keyof PortfolioData['home']) => {
    if (subField) {
        const array = (formData[field] as any)[subField] as any[];
        setFormData(prev => ({...prev, [field]: {...prev[field], [subField]: array.filter((_, i) => i !== index)}}));
    } else {
        const array = (formData as any)[field] as any[];
        setFormData(prev => ({...prev, [field]: array.filter((_, i) => i !== index)}));
    }
  };


  const handleSave = () => {
    setData(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const inputClass = "w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm";
  const labelClass = "block text-sm font-bold mb-1 text-gray-300";
  const sectionClass = "p-4 list-item-bg rounded-lg";
  const sectionTitleClass = "text-lg font-semibold border-b border-gray-700 pb-2 mb-4 text-white";

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Edit Content</h3>
        <button onClick={onLogout} className="px-4 py-2 font-semibold text-white text-sm rounded-lg transition-colors bg-red-500 hover:bg-red-600">Logout</button>
      </div>

      <div className="space-y-8">
        {/* Home Section */}
        <section className={sectionClass}>
          <h4 className={sectionTitleClass}>Home Page</h4>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Name</label>
              <input type="text" value={formData.home?.name || ''} onChange={(e) => handleInputChange(e, 'home', 'name')} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Taglines (comma separated)</label>
              <input type="text" value={formData.home?.taglines?.join(', ') || ''} 
                onChange={(e) => setFormData(prev => ({...prev, home: {...prev.home, taglines: e.target.value.split(',').map(t => t.trim())}}))} className={inputClass} />
            </div>
            <div>
              <h5 className="font-semibold mt-4 mb-2 text-gray-300">Professional Focus</h5>
              {formData.home?.professionalFocus?.map((focus, index) => (
                  <div key={focus.id} className="p-2 border border-gray-700 rounded mb-2">
                      <input name="title" placeholder="Title" value={focus.title} onChange={e => handleArrayChange(e, 'home', index, 'professionalFocus')} className={`${inputClass} mb-2`}/>
                      <textarea name="description" placeholder="Description" value={focus.description} onChange={e => handleArrayChange(e, 'home', index, 'professionalFocus')} className={`${inputClass} h-16`}/>
                      <button onClick={() => handleRemoveItem(index, 'home', 'professionalFocus')} className="text-red-400 hover:text-red-500 text-xs mt-1">Remove</button>
                  </div>
              ))}
              <button onClick={() => handleAddItem('home', 'professionalFocus')} className="text-cyan-400 text-sm mt-2 font-semibold">Add Focus Area</button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={sectionClass}>
          <h4 className={sectionTitleClass}>About Page & Experience</h4>
           <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex-grow w-full">
                        <label className={labelClass}>Profile Picture URL</label>
                        <input type="text" value={formData.about?.imageUrl || ''} onChange={(e) => handleInputChange(e, 'about', 'imageUrl')} className={inputClass} />
                    </div>
                    <div className="flex-shrink-0 mt-2 md:mt-0">
                        <span className="block text-xs text-gray-500 mb-1">Preview</span>
                        <img src={formData.about?.imageUrl || '/placeholder-profile.jpg'} alt="Preview" className="w-16 h-16 rounded-full object-cover border border-gray-600"/>
                    </div>
                </div>
                <div>
                    <label className={labelClass}>Bio</label>
                    <textarea value={formData.about?.bio || ''} onChange={(e) => handleInputChange(e, 'about', 'bio')} className={`${inputClass} h-32`}></textarea>
                </div>
                {/* Core Competencies (Skills) Editor */}
                <div>
                  <h5 className="font-semibold mt-4 mb-2 text-gray-300">Core Competencies (Skills)</h5>
                  {formData.about?.skills?.map((skill, index) => (
                      <div key={index} className="p-2 border border-gray-700 rounded mb-2 space-y-2">
                          <input name="name" placeholder="Skill Name" value={skill.name} onChange={e => handleArrayChange(e, 'about', index, 'skills')} className={inputClass}/>
                          <div>
                              <label className="text-xs text-gray-400">Level: {skill.level}</label>
                              <input type="range" min="0" max="100" name="level" value={skill.level} onChange={e => handleArrayChange(e, 'about', index, 'skills')} className="w-full"/>
                          </div>
                          <button onClick={() => handleRemoveItem(index, 'about', 'skills')} className="text-red-400 hover:text-red-500 text-xs">Remove</button>
                      </div>
                  ))}
                  <button onClick={() => handleAddItem('about', 'skills')} className="text-cyan-400 text-sm mt-2 font-semibold">Add Skill</button>
                </div>
                {/* Experience Editor */}
                <div>
                  <h5 className="font-semibold mt-4 mb-2 text-gray-300">Experience</h5>
                  {formData.about?.experience?.map((exp, index) => (
                      <div key={exp.id} className="p-2 border border-gray-700 rounded mb-2 space-y-2">
                          <input name="role" placeholder="Role" value={exp.role} onChange={e => handleArrayChange(e, 'about', index, 'experience')} className={inputClass}/>
                          <input name="company" placeholder="Company" value={exp.company} onChange={e => handleArrayChange(e, 'about', index, 'experience')} className={inputClass}/>
                          <input name="period" placeholder="Period" value={exp.period} onChange={e => handleArrayChange(e, 'about', index, 'experience')} className={inputClass}/>
                          <textarea name="responsibilities" placeholder="Responsibilities (comma-separated)" value={exp.responsibilities.join(', ')} onChange={e => handleArrayChange(e, 'about', index, 'experience')} className={`${inputClass} h-20`}/>
                          <button onClick={() => handleRemoveItem(index, 'about', 'experience')} className="text-red-400 hover:text-red-500 text-xs">Remove</button>
                      </div>
                  ))}
                  <button onClick={() => handleAddItem('about', 'experience')} className="text-cyan-400 text-sm mt-2 font-semibold">Add Experience</button>
                </div>
                {/* Collaborations Editor */}
                <div>
                  <h5 className="font-semibold mt-4 mb-2 text-gray-300">Collaborations</h5>
                  {formData.about?.collaborations?.map((collab, index) => (
                      <div key={collab.id} className="p-2 border border-gray-700 rounded mb-2 space-y-2">
                          <input name="organization" placeholder="Organization" value={collab.organization} onChange={e => handleArrayChange(e, 'about', index, 'collaborations')} className={inputClass}/>
                          <input name="role" placeholder="Role" value={collab.role} onChange={e => handleArrayChange(e, 'about', index, 'collaborations')} className={inputClass}/>
                          <textarea name="description" placeholder="Description" value={collab.description} onChange={e => handleArrayChange(e, 'about', index, 'collaborations')} className={`${inputClass} h-20`}/>
                          <button onClick={() => handleRemoveItem(index, 'about', 'collaborations')} className="text-red-400 hover:text-red-500 text-xs">Remove</button>
                      </div>
                  ))}
                  <button onClick={() => handleAddItem('about', 'collaborations')} className="text-cyan-400 text-sm mt-2 font-semibold">Add Collaboration</button>
                </div>
                {/* Education Editor */}
                <div>
                  <h5 className="font-semibold mt-4 mb-2 text-gray-300">Education</h5>
                  {formData.about?.education?.map((edu, index) => (
                      <div key={edu.id} className="p-2 border border-gray-700 rounded mb-2 space-y-2">
                          <input name="degree" placeholder="Degree" value={edu.degree} onChange={e => handleArrayChange(e, 'about', index, 'education')} className={inputClass}/>
                          <input name="institution" placeholder="Institution" value={edu.institution} onChange={e => handleArrayChange(e, 'about', index, 'education')} className={inputClass}/>
                          <input name="period" placeholder="Period" value={edu.period} onChange={e => handleArrayChange(e, 'about', index, 'education')} className={inputClass}/>
                          <button onClick={() => handleRemoveItem(index, 'about', 'education')} className="text-red-400 hover:text-red-500 text-xs">Remove</button>
                      </div>
                  ))}
                  <button onClick={() => handleAddItem('about', 'education')} className="text-cyan-400 text-sm mt-2 font-semibold">Add Education</button>
                </div>
                {/* Languages Editor */}
                <div>
                  <h5 className="font-semibold mt-4 mb-2 text-gray-300">Languages</h5>
                  {formData.about?.languages?.map((lang, index) => (
                      <div key={lang.id} className="p-2 border border-gray-700 rounded mb-2 space-y-2">
                          <input name="name" placeholder="Language" value={lang.name} onChange={e => handleArrayChange(e, 'about', index, 'languages')} className={inputClass}/>
                          <input name="proficiency" placeholder="Proficiency" value={lang.proficiency} onChange={e => handleArrayChange(e, 'about', index, 'languages')} className={inputClass}/>
                          <button onClick={() => handleRemoveItem(index, 'about', 'languages')} className="text-red-400 hover:text-red-500 text-xs">Remove</button>
                      </div>
                  ))}
                  <button onClick={() => handleAddItem('about', 'languages')} className="text-cyan-400 text-sm mt-2 font-semibold">Add Language</button>
                </div>
           </div>
        </section>
        
        {/* Skills & Tools Section */}
        <section className={sectionClass}>
          <h4 className={sectionTitleClass}>Skills &amp; Tools</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.skillsAndTools?.map((tool, index) => (
              <div key={tool.id} className="p-2 border border-gray-700 rounded space-y-2">
                <input name="name" placeholder="Name" value={tool.name} onChange={e => handleSimpleArrayChange(e, index, 'skillsAndTools')} className={inputClass}/>
                <input name="iconUrl" placeholder="Icon URL" value={tool.iconUrl} onChange={e => handleSimpleArrayChange(e, index, 'skillsAndTools')} className={inputClass}/>
                <input name="category" placeholder="Category" value={tool.category} onChange={e => handleSimpleArrayChange(e, index, 'skillsAndTools')} className={inputClass}/>
                <button onClick={() => handleRemoveItem(index, 'skillsAndTools')} className="text-red-400 hover:text-red-500 text-xs">Remove</button>
              </div>
            ))}
          </div>
          <button onClick={() => handleAddItem('skillsAndTools')} className="text-cyan-400 text-sm mt-4 font-semibold">Add Skill/Tool</button>
        </section>

        {/* Projects Section */}
        <section className={sectionClass}>
          <h4 className={sectionTitleClass}>Projects</h4>
          {formData.projects?.map((project, index) => (
            <div key={project.id} className="p-4 border border-gray-700 rounded-lg mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className={labelClass}>Title</label><input type="text" name="title" value={project.title} onChange={(e) => handleSimpleArrayChange(e, index, 'projects')} className={inputClass} /></div>
                <div><label className={labelClass}>Tech Stack (comma separated)</label><input type="text" name="techStack" value={project.techStack?.join(', ') || ''} onChange={(e) => handleSimpleArrayChange(e, index, 'projects')} className={inputClass} /></div>
                <div className="md:col-span-2"><label className={labelClass}>Description</label><textarea name="description" value={project.description} onChange={(e) => handleSimpleArrayChange(e, index, 'projects')} className={`${inputClass} h-20`}></textarea></div>
                <button onClick={() => handleRemoveItem(index, 'projects')} className="text-red-400 hover:text-red-500 text-xs md:col-span-2">Remove Project</button>
              </div>
            </div>
          ))}
          <button onClick={() => handleAddItem('projects')} className="text-cyan-400 text-sm mt-2 font-semibold">Add Project</button>
        </section>
        
        {/* Achievements Section */}
        <section className={sectionClass}>
          <h4 className={sectionTitleClass}>Achievements</h4>
          {formData.achievements?.map((ach, index) => (
            <div key={ach.id} className="p-2 border border-gray-700 rounded mb-2 space-y-2">
                <input name="title" placeholder="Title" value={ach.title} onChange={e => handleSimpleArrayChange(e, index, 'achievements')} className={inputClass}/>
                <input name="date" placeholder="Date" value={ach.date} onChange={e => handleSimpleArrayChange(e, index, 'achievements')} className={inputClass}/>
                <textarea name="description" placeholder="Description" value={ach.description} onChange={e => handleSimpleArrayChange(e, index, 'achievements')} className={`${inputClass} h-20`}></textarea>
                <select name="icon" value={ach.icon} onChange={e => handleSimpleArrayChange(e, index, 'achievements')} className={inputClass}>
                    <option value="Trophy">Trophy</option>
                    <option value="Certificate">Certificate</option>
                    <option value="Award">Award</option>
                </select>
                <button onClick={() => handleRemoveItem(index, 'achievements')} className="text-red-400 hover:text-red-500 text-xs">Remove</button>
            </div>
          ))}
          <button onClick={() => handleAddItem('achievements')} className="text-cyan-400 text-sm mt-2 font-semibold">Add Achievement</button>
        </section>

        {/* Gallery Images Section */}
        <section className={sectionClass}>
            <h4 className={sectionTitleClass}>Gallery Images</h4>
            {formData.galleryImages?.map((image, index) => (
                <div key={image.id} className="p-2 border border-gray-700 rounded mb-2 space-y-2">
                    <input name="url" placeholder="Image URL" value={image.url} onChange={e => handleSimpleArrayChange(e, index, 'galleryImages')} className={inputClass} />
                    <input name="alt" placeholder="Alt Text" value={image.alt} onChange={e => handleSimpleArrayChange(e, index, 'galleryImages')} className={inputClass} />
                    <button onClick={() => handleRemoveItem(index, 'galleryImages')} className="text-red-400 hover:text-red-500 text-xs">Remove Image</button>
                </div>
            ))}
            <button onClick={() => handleAddItem('galleryImages')} className="text-cyan-400 text-sm mt-2 font-semibold">Add Gallery Image</button>
        </section>

      </div>
      
      <div className="mt-8 text-right">
        <button 
            onClick={handleSave} 
            className={`px-6 py-2 w-36 rounded-lg transition-all duration-300 flex items-center justify-center ${isSaved ? 'bg-cyan-500 text-white' : 'action-btn'}`}
            disabled={isSaved}
        >
          {isSaved ? (
              <>
                <CheckIcon className="w-5 h-5 mr-2" />
                Saved!
              </>
          ) : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default ContentEditor;
